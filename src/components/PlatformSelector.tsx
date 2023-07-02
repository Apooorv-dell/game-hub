import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "../hooks/usePlatforms";


const PlatformSelector = () => {
  const { data ,error} = usePlatfroms();
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>


{data.map((platform)=> <MenuItem key={platform.id}>{platform.name}</MenuItem> )}       
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;