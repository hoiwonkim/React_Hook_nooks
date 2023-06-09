export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handleBeforeLeave = (event) => {
    // console.log(event);
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleBeforeLeave);
    return () => {
      document.removeEventListener("mouseleave", handleBeforeLeave);
    };
  }, []);
};
