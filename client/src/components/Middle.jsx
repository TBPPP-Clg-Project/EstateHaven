import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Middle = () => {
  const [stats, setStats] = useState({
    properties: 250,
    customers: 500,
    awards: 15,
  });
  const [startAnimation, setStartAnimation] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animations run only once when the section comes into view
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  useEffect(() => {
    if (startAnimation) {
      const updateRandomStats = () => {
        const statKeys = ["properties", "customers", "awards"];
        const randomKey = statKeys[Math.floor(Math.random() * statKeys.length)];

        setStats((prevStats) => {
          const newStats = { ...prevStats };
          switch (randomKey) {
            case "properties":
              newStats.properties = Math.floor(Math.random() * 500) + 50;
              break;
            case "customers":
              newStats.customers = Math.floor(Math.random() * 1000) + 100;
              break;
            case "awards":
              newStats.awards = Math.floor(Math.random() * 25) + 5;
              break;
            default:
              break;
          }
          return newStats;
        });
      };

      const interval = setInterval(updateRandomStats, 4000);
      return () => clearInterval(interval);
    }
  }, [startAnimation]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={startAnimation ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#0f1624] to-[#121721] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={startAnimation ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="text-section">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Find Your
              <br />
              Perfect Home
              <br />
              Instantly.
            </h1>
            <p className="text-[#64ffda] mt-4 text-lg">
              From budget-friendly to luxurious, find the residence of your
              dreams without breaking a sweat.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={startAnimation ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            {[
              {
                key: "properties",
                value: stats.properties,
                label: "Premium\nProperties",
              },
              {
                key: "customers",
                value: stats.customers,
                label: "Happy\nCustomers",
              },
              {
                key: "awards",
                value: stats.awards,
                label: "Award\nWinning",
              },
            ].map((stat, index) => (
              <div key={stat.key} className="text-center">
                <div>
                  <motion.p
                    key={stat.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-[#8892b0]"
                  >
                    {stat.value}
                    <span className="text-sm ml-1 text-gray-500">+</span>
                  </motion.p>
                  <p className="text-xs md:text-sm text-[#8892b0] mt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={startAnimation ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="aspect-square overflow-hidden rounded-t-[50%] border-2 border-[#233554] p-2">
            <img
              src="/project_img_5.jpg"
              alt="Modern architectural home design"
              className="w-full h-full object-cover rounded-t-[50%] transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Middle;
