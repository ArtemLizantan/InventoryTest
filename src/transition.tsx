import { motion } from "framer-motion";
type ComponentType<T = object> = React.FC<T>;

const transition = (OgComponent: ComponentType) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default transition;
