import { Box, Button, Header, Main, Text } from "grommet";
import {Home} from "grommet-icons"

export default function AppHome() {
  return (
    <>
      <Header background="#f9f0ff" justify="between">
        <Box pad="small" style={{margin: 20}} background="#b37feb">
          <Text color="#ffffff" weight={600}>Wordwise</Text>
        </Box>
        <Button primary label="Import" size="large" style={{margin: 20}}/>
      </Header>
      <Main pad="large" align="center" flex="grow" justify="center" style={{ maxHeight: "100vh", minHeight: "90vh", background: "#f9f0ff"}}>
          
      </Main>
    </>
  );
}
