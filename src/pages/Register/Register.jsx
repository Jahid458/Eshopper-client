import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "/eshoplogo.png";
import ecommerceImage from "/loginbg.jpg";
import useAuth from '../../hooks/useAuth';
import { pictureUpload } from '../../api/utils';
import { toast } from 'react-toastify';


export const Register = () => {
   const {createUser,setUsers,updateUserProfile} = useAuth();
  
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.fillStyle = 'rgba(255, 165, 0, 0.3)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    return () => {
      document.body.removeChild(canvas);
    };
  }, []);

  const handleRegister = async(e) => {
    e.preventDefault();
    const form = e.target ; 
    const email = form.email.value;
    const password= form.password.value ;
    const image = form.image.files[0];
    const photo = await pictureUpload(image)

    console.log(email,password,image);

    try {
      const result = await createUser(email,password); 
      setUsers(result.user);
      // console.log(result.user);
      await updateUserProfile({displayName: name, photoURL: photo})
       // user save database
      //  await userSave({...result?.user, displayName: name, photoURL: photo})
      toast.success('successfully Register'); 
      
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-transparent overflow-hidden">
      {/* Image Section - Same as login */}
      <div className="w-full md:w-1/2 h-screen hidden md:flex items-center p-6">
        <motion.img 
          src={ecommerceImage} 
          alt="Ecommerce" 
          className="h-full w-full object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ maxHeight: '100vh' }}
        />
      </div>

      {/* Form Section - Consistent with login style */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6">
        <motion.div 
          className="w-full max-w-md bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center mb-4">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-14 h-14 transition-transform hover:scale-105" 
            />
          </div>

          <h2 className="text-xl font-bold text-center text-gray-800">CREATE YOUR ACCOUNT</h2>
          <p className="text-center text-gray-500 text-sm mt-1 mb-5">Join our community today</p>

          <form onSubmit={handleRegister} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">EMAIL</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">PASSWORD</label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none  focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">PROFILE PHOTO</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all text-sm"
            >
              Register
            </button>
          </form>

          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-2 text-xs text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
            <span>Continue with Google</span>
          </button>

          <p className="mt-4 text-center text-xs text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-orange-500 hover:underline">Login</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};