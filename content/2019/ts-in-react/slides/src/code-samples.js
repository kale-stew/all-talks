export const userDataInterface = `
interface IWithUserDataProps {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  nickname?: string;
}
`

export const extendedUserDataInterface = `
interface IGreetingProps extends IWithUserDataProps {
  message: string;
}
`

export const typescriptButton = `
interface IButtonProps {
  href: string;
  disabled?: boolean;
  size?: string;
}

class Button = React.Component<IButtonProps> => {
  public static defaultProps: Partial<IButtonProps> = {
    href: '',
    disabled: false
  };

  public render() {
    return (
      <button {...this.props}>{children}</button>
    );
  }
};

export default Button;
`

export const buttonWithUnion = `
interface IButtonProps {
  href: string;
  disabled?: boolean;
  size?: string;
  message?: string | string[];
}
`

export const buttonWithEnum = `
enum ButtonSize = {
  Small,    // 0
  Medium,   // 1
  Large     // 2
}

interface IButtonProps {
  href: string;
  disabled?: boolean;
  size?: ButtonSize;
}
`

export const javaScriptButton = `
class Button extends Component {
  render() {
    return (
      <button {...this.props}>{children}</button>
    );
  }
}

Button.defaultProps = {
  href: '',
  disabled: false
};

export default Button;
`

export const javaScriptButtonWithPropTypes = `
class Button extends Component {
  render() {
    return (
      <button {...this.props}>{children}</button>
    );
  }
}

Button.defaultProps = {
  href: '',
  disabled: false
};

Button.PropTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  disabled: PropTypes.boolean,
  size: PropTypes.string
};

export default Button;
`

export const objectLiteralCheck = `
function logMessage(anything: { message: string }) {
  console.log(anything.message);
}

const first = { message: "Hi React Denver", date: "2019-04-16T22:27:57.510Z" };
const second = { message: "I like cheese", priority: "high" };
const third = { note: "No message here" };

logMessage(first);       // 👍🏼
logMessage(second);     // 👍🏼
logMessage(third);      // 🔴 Error: property 'message' is missing
`

export const allowAnyIndex = `let someObj: {
  mustBeString: string;
  [index: string]?: any;
};

myObject = { mustBeString: 'hello', whatever: true };     // 👍🏼
myObject = { mustBeString: 1, extra: 'a string' };        // 🔴 Error: property 'mustBeString' must be type string
`
