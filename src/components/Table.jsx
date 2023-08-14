import FinanceData from "../api/finance";

export default function Table() {
  return (
    <div className="table-responsive bg-table-striped">
      <table className="table">
        <thead>
          <tr style={{ backgroundColor: "#73e6ff" }}>
            <th scope="col">Health insurance plans</th>
            <th scope="col">Age limit</th>
            <th scope="col">Pre Existing Conditions</th>
            <th scope="col">price</th>
            <th scope="col">Room rent limit</th>
            <th scope="col">claim</th>
          </tr>
        </thead>
        <tbody>
          {FinanceData.map((item) => {
            return (
              <tr key={item.id} className="border-start">
                <th
                  scope="row"
                  style={{ padding: "24px" }}
                  className="border-end"
                >
                  {item.name}
                </th>
                <td style={{ padding: "24px" }} className="border-end">
                  {item.age_limit}
                </td>
                <td style={{ padding: "24px" }}>
                  {item.pre_existing_conditions}
                </td>
                <td style={{ padding: "24px" }} className="border-end">
                  {item.price}
                </td>
                <td style={{ padding: "24px" }} className="border-end">
                  {item.Room_rent_limit}
                </td>
                <td style={{ padding: "24px" }} className="border-end">
                  {item.claim}
                </td>
                <td style={{ padding: "24px" }} className="border">
                  <button type="button" class="btn btn-outline-info">
                    <a
                      style={{ textDecoration: "none", color: "black" }}
                      href={item.link}
                    >
                      BUY NOW
                    </a>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
