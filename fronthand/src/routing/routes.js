export const routes ={
  MAIN:"/",
  MENU: "/Menu",
  TALK_WITH_ROBERTO: "/Talk-With-Roberto",
  YOUR_APPOINMENT: "/Appointment",
  ABOUT: "/About",
  LOGIN_REGISTER: "/Login-register",

};

export const main_pages =[];
main_pages.push({page_name: "Menu", route_url: routes.MENU});
main_pages.push({page_name: "Talk With Your Doctor", route_url: routes.TALK_WITH_ROBERTO});
main_pages.push({page_name: "Your Appointment", route_url: routes.YOUR_APPOINMENT});
main_pages.push({page_name: "About", route_url: routes.ABOUT});


export const dialog_pages = [];
dialog_pages.push({page_name:"Log Out", route_url: routes.LOGIN_REGISTER});





