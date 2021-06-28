declare namespace IDropDown {
  export interface IProps extends IHandlers {
    options: IOptions[];
  }

  export interface IOptions {
    body: string;
    id: string;
  }

  export interface IHandlers {
    onOptionMenuClick: (id: string) => void;
  }
}

export { IDropDown };
