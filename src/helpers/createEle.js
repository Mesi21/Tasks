const createEle = (eleType, eleClass, eleId, eleTxt = null) => {
  const ele = document.createElement(eleType);
  ele.className = eleClass;
  ele.id = eleId;
  ele.textContent = eleTxt;
  return ele;
};

export default createEle;