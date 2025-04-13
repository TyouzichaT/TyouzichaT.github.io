"use client";

import { motion } from "framer-motion";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const marketData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Market Performance",
        data: [65, 59, 80, 81, 56, 90],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const skillData = {
    labels: ["Financial Analysis", "Machine Learning", "Data Science", "Product Development", "Risk Management"],
    datasets: [
      {
        label: "Expertise Level",
        data: [90, 85, 88, 92, 87],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="You Zuo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              You Zuo
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 sm:mb-6">
              Financial Product Builder | AI & Data Science Expert
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/TyouzichaT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/you-zuo-463753166/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:zuoyou1998@gmail.com"
                className="text-gray-300 hover:text-white transition-colors text-xl"
              >
                Email
              </motion.a>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">About Me</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
            >
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I am a passionate financial product builder with expertise in AI and data science.
                My work focuses on creating innovative financial solutions that leverage cutting-edge technology
                to solve complex economic challenges. With a strong background in both finance and technology,
                I bridge the gap between traditional financial services and modern technological advancements.
              </p>
            </motion.div>
          </motion.section>

          {/* Market Analysis Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Market Analysis</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
            >
              <div className="h-64 sm:h-96">
                <Line
                  data={marketData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        labels: {
                          color: 'white'
                        }
                      }
                    },
                    scales: {
                      y: {
                        ticks: {
                          color: 'white'
                        },
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)'
                        }
                      },
                      x: {
                        ticks: {
                          color: 'white'
                        },
                        grid: {
                          color: 'rgba(255, 255, 255, 0.1)'
                        }
                      }
                    }
                  }}
                />
              </div>
            </motion.div>
          </motion.section>

          {/* Expertise Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-gray-700"
              >
                <div className="h-64 sm:h-96">
                  <Bar
                    data={skillData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          labels: {
                            color: 'white'
                          }
                        }
                      },
                      scales: {
                        y: {
                          ticks: {
                            color: 'white'
                          },
                          grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                          }
                        },
                        x: {
                          ticks: {
                            color: 'white'
                          },
                          grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                          }
                        }
                      }
                    }}
                  />
                </div>
              </motion.div>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-gray-700"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Financial Products</h3>
                  <p className="text-gray-300">Product Design, Risk Management, Financial Modeling</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-gray-700"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">AI & Data Science</h3>
                  <p className="text-gray-300">Machine Learning, Deep Learning, Predictive Analytics</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-gray-700"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Technical Skills</h3>
                  <p className="text-gray-300">Python, R, SQL, TensorFlow, PyTorch</p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Featured Projects & Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Financial Market Analysis</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
                  Advanced market analysis using machine learning to predict market trends and identify investment opportunities.
                </p>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-base sm:text-lg"
                >
                  View Analysis →
                </motion.a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">AI-Powered Trading System</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
                  Development of an automated trading system using deep learning algorithms for market prediction.
                </p>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center text-base sm:text-lg"
                >
                  View Project →
                </motion.a>
              </motion.div>
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Achievements</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
            >
              <ul className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                  Published research on AI applications in financial markets
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                  Developed innovative financial products with significant market impact
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                  Contributed to open-source projects in financial technology
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                  Speaker at major fintech and AI conferences
                </motion.li>
              </ul>
            </motion.div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Get in Touch</h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
            >
              <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
                Interested in collaboration or discussing financial technology projects? Let&apos;s connect!
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:your.email@example.com"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-base sm:text-lg"
                >
                  Send Email
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-base sm:text-lg"
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
