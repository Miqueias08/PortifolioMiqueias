import { Button, Dropdown, Navbar,DarkThemeToggle } from "flowbite-react";
import { AiOutlineMenu } from "react-icons/ai";
import '../styles/header.sass'

const Header = () => {
  return (
    <Navbar id="navbar">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Miquéias Fernando</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle className="btn-menu" />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Button color="gray" className="btn-menu"><AiOutlineMenu className="icone"/> Menu</Button>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Miquéias Fernando Almeida de Jesus</span>
            <span className="block truncate text-sm font-medium">miqueiasfernando@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Sobre Mim</Dropdown.Item>
          <Dropdown.Item>Contato</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  )
}

export default Header