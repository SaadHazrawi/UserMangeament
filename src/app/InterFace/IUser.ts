export interface User {
    avatar: string;
    email: string;
    first_name: string;
    id: Number;
    last_name: string;
  }
  
  export interface UserInformation {
    page: Number;
    per_page: Number;
    total: Number;
    total_pages: Number;
    data: User[];
  }
  