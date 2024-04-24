import Item from "./Item";

const List = ({ listData, deleteData, submittingDataStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingDataStatus={submittingDataStatus}
          />
        );
      })}
      {/* <Item />
      <Item />
      <Item /> */}
    </div>
  );
};
export default List;
