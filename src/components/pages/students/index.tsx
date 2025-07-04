

import { useEffect, useState } from "react";
import { Search , LayoutDashboard} from "lucide-react";
import "../students/students.css";
import { useNavigate } from "react-router";


const Students = () => {
  const [searchNumber, setSearchNumber] = useState("");
  const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  //const headerKeys = Object.keys(Data[0]);
  const navigate = useNavigate()

  const filterById = (id: number) => {
    // filter Data by name
    const filteredData = data?.filter(({item}:any) => item.id == id);
    setFilteredData(filteredData);
    return filteredData;
  };
  const fetchStudents = async () => {
    // try {
    //   const response = await th({
    //     method: 'get',
    //     url: '/books',
    //   });
    //   console.log({ response });
    //   if (response.status === 200) {
    //     console.log(response.data);
    //     setData(response.data);
    //     setFilteredData(response.data);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  // filter data by name on search text change
  useEffect(() => {
    if (searchNumber !== "") {
      filterById(parseInt(searchNumber));
    } else {
      setFilteredData(data);
    }
  }, [searchNumber]);

  // filterByName("marker");
  const tableData = searchNumber ? filteredData : data;
  // console.log(tableData);


  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>step 1: Students Personal Details</h1>
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input
          placeholder="type name..."
          onChange={(e) => {
            setSearchNumber(e.target.value);
          }}
        />
        <button
          style={{ marginLeft: 16, padding: "4px 16px", width: "30%"}}
          onClick={() => navigate("/books/add")}
        >
          + Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>DoB</th>
          <th>Program_id</th>
          <th>Department_id</th>
          <th>password</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item : any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.dob}</td>
              <td>{item.program_id}</td>
              <td>{item.department_id}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*  Go to Dashboard Icon Button */}
    <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: "#0cbe24",
              padding: "12px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: 999,
            }}
        onClick={() => navigate("/gotodashboard")}
      >
        <LayoutDashboard size={20} />
        Go to Dashboard
      </button>
    </div>
    </div>
  );
};

export default Students;
