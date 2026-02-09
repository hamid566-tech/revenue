import { useNavigate } from "react-router-dom"

export const useNavigation =()=>{

    const navigate=useNavigate();

    const searchHandle =(searchValue)=>{
        const routes={
            'screen_2':'/first',
            'screen_3':'/second',
            'screen_4':'/fourth',
            'screen_5':'/fifth',
            'screen_6':'/sixth',
            'screen_7':'/seventh',
            'screen_7':'/eight',
        };

        const targetpath = routes[searchValue];
        if(targetpath){
            navigate(targetpath);
        }
        else{
            alert("صفحه مورد نظر یافت نشد");
        }
    }

    const navigateto =(path) =>{
        navigate(path);
    }

    return {
        searchHandle,
        navigateto
    }
}