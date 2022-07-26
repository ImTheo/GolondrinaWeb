import React from "react";
import AdminActivities from "./AdminActivities";
import AdminNavegation from "./AdminNavegation";
import AdminReservations from "./AdminReservations";
import AdminRooms from "./AdminRooms";

export function CrudAdmin() {
  return (
    <div>
      <AdminNavegation/>
      <AdminActivities/>
      <AdminReservations/>
      <AdminRooms/>
    </div>
  );
}
export default CrudAdmin;
