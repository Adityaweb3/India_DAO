import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x2ACE5Bb535E70b58E5C270c8fCA99FAd9A68AFf8", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Startup Launcher",
        description: "This NFT will give you access to IndiaDAO!",
        image: readFileSync("scripts/assets/startup.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();