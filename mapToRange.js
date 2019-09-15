const mapToRange = (v, l1, h1, l2, h2) => l2 + (h2 - l2) * (v - l1) / (h1 - l1);
export default mapToRange;
