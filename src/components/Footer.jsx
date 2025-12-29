import Layout from "./Layout";

function Footer() {
  return (
    <Layout>
      <Box sx={{ backgroundColor: "#0d47a1", color: "#fff", py: 3 }}>
        <Container textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Atten Go. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
}

export default Footer;
