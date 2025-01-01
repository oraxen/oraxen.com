import logo from "./logo.svg";
import community from "./img/community.png";
import documentation from "./img/documentation.jpg";
import tutorials from "./img/tutorials.jpg";
import resources from "./img/resources.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="content">
        <header>
          <div className="header_left">
            <h1 className="title">Oraxen, extend the game</h1>
            <p className="subtitle">
              Create custom item, automatically generate, compress, protect and
              upload your resourcepack!
            </p>
            <div className="buttons">
              <a
                className="button yellow_gradient"
                href="https://www.spigotmc.org/resources/%E2%80%8D%E2%9C%85-25-%E2%98%84%EF%B8%8F-oraxen-add-items-blocks-armors-hats-food-furnitures-plants-and-gui.72448/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spigot
              </a>
              <a
                className="button green_gradient"
                href="https://polymart.org/resource/oraxen-custom-items.629"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polymart
              </a>
            </div>
          </div>

          <img className="logo" src={logo} alt="logo" />
        </header>

        <div className="cards">
          <a
            className="card"
            href="https://docs.oraxen.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="card_img mask2" src={documentation} />
            <div className="card_text right">
              <h2>Documentation</h2>
              <p className="card_p right">
                Discover the great possibilities of the plugin and create the
                perfect server. The extensive documentation will help you to
                configure Oraxen.
              </p>
            </div>
          </a>

          <a
            className="card"
            href="https://discord.gg/2ng6q3JNQ7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card_text">
              <h2>Community</h2>
              <p className="card_p">
                Join the discord community of Oraxen users to get help and share
                your knowledge.
              </p>
            </div>
            <img className="card_img mask1" src={community} />
          </a>

          <a
            className="card"
            href="https://mcmodels.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="card_img mask2" src={resources} />
            <div className="card_text right">
              <h2>Resources</h2>
              <p className="card_p right">
                Buy and sell your creations on mcmodel, the biggest platform
                dedicated to textures, models and other schematics for your
                server, our official partner.
              </p>
            </div>
          </a>

          <a
            className="card"
            href="https://mcmodels.net/how-to-tutorials/oraxen-tutorials-guides/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card_text">
              <h2>Tutorials</h2>
              <p className="card_p">
                McModel also offers many tutorials to show you advanced user
                tips with the plugin.
              </p>
            </div>
            <img className="card_img mask3" src={tutorials} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
