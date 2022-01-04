/**
 * Data types
 */
export interface phone_main{
    what_app:string;
    color:string
    bg_app:string
}
export interface click_position{
    x:number,
    y:number,
}

interface style{
    typestyle: string,
    bg_color:string,
    color:string,
}


export interface style_apps{
    appName:string,
    style: style[]
}



/**
 * State types
 */
export interface styleState{
    navigation:string,
    click_position: click_position,
    phone_main:phone_main,
    open_app:boolean
    style_apps: style_apps[]
}