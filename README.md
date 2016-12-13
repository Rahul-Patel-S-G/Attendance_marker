# Attendance_marker
Show the attendance list using css and jquery.
The screenshot is shown below

![Alt text](attendance.JPG?raw=true "Attendance Screen shot")

The values are fetched from the json object. The JSon object contains the customer Id , name ,time, width. The margin left will place the attendance marker at the exact time and the width is to specify how much time the customer attendanded in the day.
var jsonArray = [
    { "id": "#12345", "name": "Rahul Patel S G" ,"from": "06:00","to": "07:00","left":88,"width":44,"status":"present" },
];
