import SelectPageButton from "./SelectPageButton";

const SelectPage = () => {
  const pages = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
  ];

  return (
    <div className="select-page">
      {pages.map((page) => (
        <SelectPageButton key={page.label} label={page.label} value={page.value} />
      ))}
    </div>
  );
};

export default SelectPage;
