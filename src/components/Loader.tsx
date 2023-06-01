import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';

const colors = ['#22238f', '#6b45fa', '#ca3286', '#fe2b49', '#fe652d'];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const dotVariants = {
  initial: {},
  animate: {
    height: [40, 100, 40],
    transition: {
      repeat: Infinity,
    },
  },
};

const Loader = () => {
  return (
    <Html>
      <span className="canvas-loader">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          style={{
            display: 'flex',
            gap: 16,
            height: 0,
            alignItems: 'center',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => {
              return (
                <motion.div
                  key={index}
                  variants={dotVariants}
                  style={{
                    height: 20,
                    width: 20,
                    backgroundColor: colors[index % colors.length],
                    borderRadius: 10,
                  }}
                />
              );
            })}
        </motion.div>
      </span>
    </Html>
  );
};

export default Loader;
