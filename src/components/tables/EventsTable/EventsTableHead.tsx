export function EventsTableHead() {
  const thStyle =
    "px-6 py-3 text-sm text-content-placeholder/40 text-content-base/40 font-normal border-b border-layout-body";

  return (
    <thead className="bg-layout-spotlight text-sm">
      <tr className="">
        <th scope="col" className={thStyle}>
          Evento
        </th>
        <th scope="col" className={thStyle}>
          Privacidade
        </th>
        <th scope="col" className={thStyle} />
      </tr>
    </thead>
  );
}
