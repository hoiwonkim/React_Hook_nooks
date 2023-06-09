export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return {
      currentItem: null,
      changeItem: () => {}
    };
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  const changeItem = (index) => {
    setCurrentIndex(index);
  };
  return {
    currentItem: allTabs[currentIndex],
    changeItem
  };
};
