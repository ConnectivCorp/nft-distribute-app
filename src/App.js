import Post from "./components/post/Post";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Center, Image } from "@chakra-ui/react";
import { Complete } from "./Complete";
import { Page404 } from "./Page404";
import { IconLogoWhite } from "./static";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="main">
        {/* Header start */}
        <Center bg="#2C2B2B" w="100%" h="50px" color="white">
          <a
            href="https://nftgarden.app"
            alt="nft_garden"
            rel="noreferrer"
            target="_blank"
          >
            <Image h="31px" w="200px" src={IconLogoWhite} alt="NFT_logo" />
          </a>
        </Center>
        {/* Header end */}

        <Switch>
          <Route exact path="/">
            <Redirect to="nft-sample" />
          </Route>
          <Route exact path="/nft-sample">
            <Post />
          </Route>
          <Route path="/complete">
            <Complete />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
