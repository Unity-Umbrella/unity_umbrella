import "./UserList.style.css";
import { IUser } from "./UserType";

type Props = {
    list: IUser[]
};

const userList = (props: Props) => {
    const {list} = props;
    return <div>

<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Campus Name</th>
    <th>College Name</th>
    <th>Actions</th>
  </tr>
  {list.map((user) => {
    console.log(user);
    return(
        <tr key={user.id}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
            <td>{user.campusName}</td>
            <td>{user.collegeName}</td>
            <td>
                <div>
                    <input type="button" value="View" />
                    <input type="button" value="Edit" />
                    <input type="button" value="Delete" />
                </div>
            </td>
        </tr>
    );
  })}
  
  
</table>

    </div>;

    
};

export default userList;