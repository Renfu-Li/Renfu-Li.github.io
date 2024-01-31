import { Avatar, Link, Stack } from "@mui/material";

function MenuBar() {
  const menuItems = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Certificates",
      id: "certificates",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ];

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="white"
      paddingX="0.75em"
      height={56}
      boxSizing="border-box"
      position="sticky"
      top={0}
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
      zIndex={1000}
    >
      <Avatar sx={{ width: 36, height: 36 }}>R</Avatar>
      <div>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            className="menu-item"
            underline="none"
            color="#000000"
            href={`#${item.id}`}
            padding="0.75em"
            borderRadius="0.375em"
            ml="1.5em"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </Stack>
  );
}

export default MenuBar;
