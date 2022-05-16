const { JsonRpcBatchProvider } = require("@ethersproject/providers");
const fetch = require("node-fetch");

//cosas telegram
const TelegramBot = require("node-telegram-bot-api");
const { CONNECTING } = require("ws");
const token = "5376295400:AAG26hIKJy0MoLmAj4QeTBgnrdN6UQLFBCE";
const bot = new TelegramBot(token, { polling: true });
const telegramChannel = "@StakelyFaucetBalance";
console.log("1");
let text = "FAUCETS A RELLENAR!!!!!!\n\n";
const start = async () => {
  let fuseMessage = await fuse();
  if (fuseMessage) text = text + fuseMessage + "\n";
  let harmonyMessage = await harmony();
  if (harmonyMessage) text + harmonyMessage + "\n";
  //xdai();
  let solanaMessage = await solana();
  if (solanaMessage) text = text + solanaMessage + "\n";
  let telosMessage = await telos();
  if (telosMessage) text = text + telosMessage + "\n";
  let evmosMessage = await evmos();
  if (evmosMessage) text = text + evmosMessage + "\n";
  let auroraMessage = await aurora();
  if (auroraMessage) text = text + auroraMessage + "\n";
  let velasMessage = await velas();
  if (velasMessage) text = text + velasMessage + "\n";
  let bscMessage = await bsc();
  if (bscMessage) text = text + bscMessage + "\n";
  let movrMessage = await movr();
  if (movrMessage) text = text + movrMessage + "\n";
  let avaxMessage = await avax();
  if (avaxMessage) text = text + avaxMessage + "\n";
  let kukoinMessage = await kukoin();
  if (kukoinMessage) text = text + kukoinMessage + "\n";
  let lumMessage = await lum();
  if (lumMessage) text = text + lumMessage + "\n";
  let regenMessage = await regen();
  if (regenMessage) text = text + regenMessage + "\n";
  let irisMessage = await iris();
  if (irisMessage) text = text + irisMessage + "\n";
  let desmosMessage = await desmos();
  if (desmosMessage) text = text + desmosMessage + "\n";
  let secretMessage = await secret();
  if (secretMessage) text = text + secretMessage + "\n";
  let sifchainMessage = await sifchain();
  if (sifchainMessage) text = text + sifchainMessage + "\n";
  let crescentMessage = await crescent();
  if (crescentMessage) text = text + crescentMessage + "\n";
  let bitcannaMessage = await bitcanna();
  if (bitcannaMessage) text = text + bitcannaMessage + "\n";
  let cosmosMessage = await cosmos();
  if (cosmosMessage) text = text + cosmosMessage + "\n";
  let FUSEMessage = await FUSE();
  if (FUSEMessage) text = text + FUSEMessage + "\n";
  let junoMessage = await juno();
  if (junoMessage) text = text + junoMessage + "\n";
  let fantomMessage = await fantom();
  if (fantomMessage) text = text + fantomMessage + "\n";
  let polygonMessage = await polygon();
  if (polygonMessage) text = text + polygonMessage + "\n";
  let celoMessage = await celo();
  if (celoMessage) text = text + celoMessage + "\n" + "\n";
  text = text + "https://stakely.io/en/faucet";
  console.log("finishing...");

  bot.sendMessage(telegramChannel, text);
};

//KUKOIN

const kukoin = async () => {
  console.log("Starting Kucoin...");
  let kcsLink = "https://rpc-mainnet.kcc.network";
  let res = await fetch(kcsLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9", "latest"],
      id: 0,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let kcsBalance = parseInt(res.result, 16);
  kcsBalance = kcsBalance * 0.000000000000000001;
  //console.log(kcsBalance);

  if (kcsBalance < 0.07692307692307693) {
    console.log("Balance en Kukoin < 1$  Balance: " + kcsBalance);
  }
  return [["Balance en Kukoin < 1$  Balance: " + kcsBalance]];
};

// AVALANCHE

const avax = async () => {
  console.log("Starting Avalanche...");
  let avaxLink = "https://api.avax.network/ext/bc/C/rpc";
  let res = await fetch(avaxLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9", "latest"],
      id: 0,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let avaxBalance = parseInt(res.result, 16);
  avaxBalance = avaxBalance * 0.000000000000000001;
  //console.log(avaxBalance);

  if (avaxBalance < 0.03045066991473812) {
    console.log("Balance en AVALANCHE < 1$   Balance: " + avaxBalance);
    return [["Balance en AVALANCHE < 1$   Balance: " + avaxBalance]];
  }
};

//MONRIVER

const movr = async () => {
  console.log("Starting Moonriver...");
  let movrLink =
    "https://blockscout.moonriver.moonbeam.network/api?module=account&action=eth_get_balance&address=0x0e79065B5F11b5BD1e62B935A600976ffF3754B9&block=latest";
  let res = await fetch(movrLink, {
    method: "POST",
    headers: {
      accept: "application/json",
    },
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let movrBalance = parseInt(res.result, 16);
  movrBalance = movrBalance * 0.000000000000000001;
  //console.log(movrBalance);

  if (movrBalance < 0.04570383912248629) {
    console.log("Balance en Moonriver < 1$   Balance: " + movrBalance);
    return [["Balance en Moonriver < 1$   Balance: " + movrBalance]];
  }
};

//BSC

const bsc = async () => {
  console.log("Starting BSC...");
  let bscLink = "https://bsc-dataseed4.binance.org";
  let res = await fetch(bscLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9", "latest"],
      id: 0,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let bscBalance = parseInt(res.result, 16);
  bscBalance = bscBalance * 0.000000000000000001;
  //console.log(bscBalance);

  if (bscBalance < 0.003444831031037927) {
    console.log("Balance en BSC < 1$   Balance: " + bscBalance);
    return [["Balance en BSC < 1$   Balance: " + bscBalance]];
  }
};

//VELAS

const velas = async () => {
  console.log("Starting VELAS...");
  let velasLink = "https://explorer.velas.com/rpc	";
  let res = await fetch(velasLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9", "latest"],
      id: 0,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let velasBalance = parseInt(res.result, 16);
  velasBalance = velasBalance * 0.000000000000000001;
  //console.log(velasBalance);

  if (velasBalance < 13.896029904256354) {
    console.log("Balance en VELAS < 1$   Balance: " + velasBalance);
    return [["Balance en VELAS < 1$   Balance: " + velasBalance]];
  }
};

//AURORA

const aurora = async () => {
  console.log("Starting Aurora...");
  let AuroraLink = "https://mainnet.aurora.dev	";
  let res = await fetch(AuroraLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9", "latest"],
      id: 0,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let auroraBalance = parseInt(res.result, 16);
  auroraBalance = auroraBalance * 0.000000000000000001;
  //console.log(auroraBalance);

  if (auroraBalance < 0.2849002849002849) {
    console.log("Balance en Aurora < 1$   Balance: " + auroraBalance);
    return [["Balance en Aurora < 1$   Balance: " + auroraBalance]];
  }
};

// EVMOS EVM

const evmos = async () => {
  console.log("Starting EVMOS EVM...");
  let evmosLink = "https://evmos-json-rpc.stakely.io/";
  let res = await fetch(evmosLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9", "latest"],
      id: 0,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let evmosBalance = parseInt(res.result, 16);
  evmosBalance = evmosBalance * 0.000000000000000001;
  //console.log(evmosBalance);

  if (evmosBalance < 0.7142857142857143) {
    console.log("Balance en EVMOS < 1$   Balance: " + evmosBalance);
    return [["Balance en EVMOS < 1$   Balance: " + evmosBalance]];
  }
};

//TELOS

const telos = async () => {
  console.log("Starting Telos...");
  let telosLink = "https://rpc2.eu.telos.net/evm	";
  let res = await fetch(telosLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9"],
      id: 9001,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res.result);
  let telosBalance = parseInt(res.result, 16);
  telosBalance = telosBalance * 0.000000000000000001;
  //console.log(telosBalance);

  if (telosBalance < 2.874356144223694) {
    console.log("Balance en Telos < 1$   Balance: " + telosBalance);
    return [["Balance en Telos < 1$   Balance: " + telosBalance]];
  }
};

//SOLANA

const solana = async () => {
  console.log("starting solana...");
  let SOLLink = "https://api.mainnet-beta.solana.com";
  let res = await fetch(SOLLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "getBalance",
      params: ["3EuATT6cASS5ttHKYuGGdJzJKR6wZjs1m33XKJvPCjuL"],
      id: 1,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let SOLBalance = res.result.value;
  SOLBalance = SOLBalance * 0.000000001;
  //console.log(SOLBalance);

  if (SOLBalance < 0.02053388090349076) {
    console.log("Balance en Solana < 1$   Balance: " + SOLBalance);
    return [["Balance en Solana < 1$   Balance: " + SOLBalance]];
  }
};

//HARMONY

const harmony = async () => {
  console.log("Starting Harmony...");
  let ONELink = "https://api.harmony.one/";
  let res = await fetch(ONELink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9", "0x1"],
      id: 1,
    }),
  });
  //console.log(res);
  res = await res.json();
  //console.log(res);
  let ONEBalance = parseInt(res.result, 16);
  //console.log(ONEBalance);

  if (ONEBalance < 20.74344507135745) {
    console.log("Balance en Harmony < 1$   Balance: " + ONEBalance);
    return [["Balance en Harmony < 1$   Balance: " + ONEBalance]];
  }
};

//FUSE

const fuse = async () => {
  console.log("Starting FUSE...");
  let FUSELink = "https://rpc.fuse.io/";
  let res = await fetch(FUSELink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: ["0x0e79065B5F11b5BD1e62B935A600976ffF3754B9", "latest"],
      id: 1,
    }),
  });
  res = await res.json();
  //console.log(res.result);
  let FUSEBalance = parseInt(res.result, 16);
  //console.log(FUSEBalance);

  if (FUSEBalance < 5.915794579949006) {
    console.log("Balance en FUSE < 1$   Balance: " + FUSEBalance);
    return [["Balance en FUSE < 1$   Balance: " + FUSEBalance]];
  }
};

//Lum Network

const lum = async () => {
  console.log("Starting Lum Network...");
  let LUMLink =
    "https://rest.cosmos.directory/lumnetwork/cosmos/bank/v1beta1/balances/lum1pyssygjaj8mvu3skp7aj4q9m9hj87cnkazeqtv";
  let res = await fetch(LUMLink);
  res = await res.json();
  // console.log(res);
  let LUMBalance = res.balances[0].amount * 0.000001;
  //console.log(LUMBalance);

  if (LUMBalance < 345.90107229332415) {
    console.log("Balance en LUM Network < 1$   Balance: " + LUMBalance);
    return [["Balance en LUM Network < 1$   Balance: " + LUMBalance]];
  }
};

//REGEN

const regen = async () => {
  console.log("starting REGEN...");
  let REGENLink =
    "https://rest.cosmos.directory/regen/cosmos/bank/v1beta1/balances/regen1pyssygjaj8mvu3skp7aj4q9m9hj87cnkh204gu";
  let res = await fetch(REGENLink);
  res = await res.json();
  //console.log(res);
  let REGENBalance = res.balances[0].amount * 0.000001;
  //console.log(REGENBalance);

  if (REGENBalance < 2.705100737951481) {
    console.log("Balance en REGEN < 1$   Balance: " + REGENBalance);
    return [["Balance en REGEN < 1$   Balance: " + REGENBalance]];
  }
};

//IRIS Network

const iris = async () => {
  console.log("Starting IRIS...");
  let IRIRSLink =
    "https://rest.cosmos.directory/irisnet/cosmos/bank/v1beta1/balances/iaa1pyssygjaj8mvu3skp7aj4q9m9hj87cnka2ycuf";
  let res = await fetch(IRIRSLink);
  res = await res.json();
  // console.log(res);
  let IRIRSBalance = res.balances[0].amount * 0.000001;
  //console.log(IRIRSBalance);

  if (IRIRSBalance < 45.90735894963963) {
    console.log("Balance en iris < 1$   Balance: " + IRIRSBalance);
    return [["Balance en iris < 1$   Balance: " + IRIRSBalance]];
  }
};

//DESMOS

const desmos = async () => {
  console.log("Startig Desmos...");
  let DSMLink =
    "https://rest.cosmos.directory/desmos/cosmos/bank/v1beta1/balances/desmos1pyssygjaj8mvu3skp7aj4q9m9hj87cnkusfefq";
  let res = await fetch(DSMLink);
  res = await res.json();
  // console.log(res);
  let DSMBalance = res.balances[0].amount * 0.000001;
  //console.log(DSMBalance);

  if (DSMBalance < 21.037130535394972) {
    console.log("Balance en desmos < 1$   Balance: " + DSMBalance);
    return [["Balance en desmos < 1$   Balance: " + DSMBalance]];
  }
};

//SECRET NETWORK

const secret = async () => {
  console.log("Starting Secret Network...");
  let SCRTLink =
    "https://rest.cosmos.directory/secretnetwork/cosmos/bank/v1beta1/balances/secret1pyssygjaj8mvu3skp7aj4q9m9hj87cnk2dsqry";
  let res = await fetch(SCRTLink);
  res = await res.json();
  // console.log(res);
  let SCRTBalance = res.balances[0].amount * 0.000000000000000001;
  // console.log(SCRTBalance);

  if (SCRTBalance < 0.4587155963302752) {
    console.log("Balance en Secret < 1$   Balance: " + SCRTBalance);
    return [["Balance en Secret < 1$   Balance: " + SCRTBalance]];
  }
};

//Sifchain

const sifchain = async () => {
  console.log("Starting Sifchain...");
  let ROWANLink =
    "https://rest.cosmos.directory/sifchain/cosmos/bank/v1beta1/balances/sif1pyssygjaj8mvu3skp7aj4q9m9hj87cnkd4tl3n";
  let res = await fetch(ROWANLink);
  res = await res.json();
  // console.log(res);
  let ROWANBalance = res.balances[0].amount * 0.000000000000000001;
  // console.log(ROWANBalance);

  if (ROWANBalance < 13.553073837146265) {
    console.log("Balance en Sifchain < 1$   Balance: " + ROWANBalance);
    return [["Balance en Sifchain < 1$   Balance: " + ROWANBalance]];
  }
};

// CRESCENT

const crescent = async () => {
  console.log("Starting Crescent...");
  let BCRELink =
    "https://rest.cosmos.directory/crescent/cosmos/bank/v1beta1/balances/cre1pyssygjaj8mvu3skp7aj4q9m9hj87cnkvqhvt4";
  let res = await fetch(BCRELink);
  res = await res.json();
  //console.log(res);
  let BCREBalance = res.balances[0].amount * 0.000001;
  //console.log(BCREBalance);

  if (BCREBalance < 1.3157) {
    console.log("Balance en Crescent < 1$   Balance: " + BCREBalance);
    return [["Balance en Crescent < 1$   Balance: " + BCREBalance]];
  }
};

//BITCANNA

const bitcanna = async () => {
  console.log("Starting Bitcanna...");
  let BCNALink =
    "https://rest.cosmos.directory/bitcanna/cosmos/bank/v1beta1/balances/bcna1pyssygjaj8mvu3skp7aj4q9m9hj87cnkjc5gk2";
  let res = await fetch(BCNALink);
  res = await res.json();
  //console.log(res.balances[0].amount);
  let BCNABalance = res.balances[0].amount * 0.000001;
  //console.log(BCNABalance);

  if (BCNABalance < 43.91357807834182) {
    console.log("Balance en Bitcanna < 1$   Balance: " + BCNABalance);
    return [["Balance en Bitcanna < 1$   Balance: " + BCNABalance]];
  }
};

//COSMOS

const cosmos = async () => {
  console.log("Starting Cosmos ATOM...");
  let ATOMLink =
    "https://cosmoshub-lcd.stakely.io/cosmos/bank/v1beta1/balances/cosmos1pyssygjaj8mvu3skp7aj4q9m9hj87cnkggyf7c";
  let res = await fetch(ATOMLink);
  res = await res.json();

  let ATOMBalance = res.balances[0].amount * 0.000001;
  //console.log(ATOMBalance);
  //console.log(FuseBalance);

  if (ATOMBalance < 0.08912655971479501) {
    console.log("Balance en Cosmos < 1$   Balance: " + ATOMBalance);
    return [["Balance en Cosmos < 1$   Balance: " + ATOMBalance]];
  }
};

//FUSE

const FUSE = async () => {
  console.log("Starting FUSE...");
  let FUSELink =
    "https://explorer.fuse.io/api?module=account&action=eth_get_balance&address={0x0e79065B5F11b5BD1e62B935A600976ffF3754B9}";
  let res = await fetch(FUSELink);
  res = await res.json();
  //console.log(res);
  let FuseBalance = res.result * 0.000000000000000001;

  //console.log(FuseBalance);

  if (FuseBalance < 0.4672897196261682) {
    console.log("Balance en Fuse < 1$   Balance: " + FuseBalance);
    return [["Balance en Fuse < 1$   Balance: " + FuseBalance]];
  }
};

//JUNO

const juno = async () => {
  console.log("Starting Juno...");
  let JunoLink =
    "https://lcd-juno.itastakers.com/cosmos/bank/v1beta1/balances/juno1pyssygjaj8mvu3skp7aj4q9m9hj87cnk768jey";
  let res = await fetch(JunoLink);
  res = await res.json();
  //console.log(res.balances[0].amount);
  let JunoBalance = res.balances[0].amount * 0.000001;

  //console.log(JunoBalance);

  if (JunoBalance < 0.15723270440251572) {
    console.log("Balance en Juno < 1$   Balance: " + JunoBalance);
    return [["Balance en Juno < 1$   Balance: " + JunoBalance]];
  }
};

//Fantom

const fantom = async () => {
  console.log("Starting Fantom...");
  let FantomLink =
    "https://api.ftmscan.com/api?module=account&action=balance&address=0x0e79065B5F11b5BD1e62B935A600976ffF3754B9&apikey=HCNKGE7E1C3P62CKY87RHQTVAGHFPV58EJ";
  let res = await fetch(FantomLink);
  res = await res.json();
  let FTMBalance = res.result * 0.000000000000000001;
  //console.log(FTMBalance);
  if (FTMBalance < 2.1849804444250225) {
    console.log("Balance en Fantom < 1$   Balance: " + FTMBalance);
    return [["Balance en Fantom < 1$   Balance: " + FTMBalance]];
  }
};

//CELO

const celo = async () => {
  console.log("Starting Celo");
  let CeloLink =
    "https://explorer.celo.org/api?module=account&action=balance&address=0x0e79065B5F11b5BD1e62B935A600976ffF3754B9";
  let res = await fetch(CeloLink);
  res = await res.json();

  let CeloBalance = res.result * 0.000000000000000001;

  //console.log(CeloBalance);

  if (CeloBalance < 0.4672897196261682) {
    console.log("Balance en Celo < 1$   Balance: " + CeloBalance);
    return [["Balance en Celo < 1$   Balance: " + CeloBalance]];
  }
};

//POLYGON

const polygon = async () => {
  console.log("strting polygon...");
  let PolygonLink =
    "https://api.polygonscan.com/api?module=account&action=balance&address=0x0e79065B5F11b5BD1e62B935A600976ffF3754B9&apikey=TBPSNFUNCF7RYU9V8AZICACH2Q13248GHF";
  let res = await fetch(PolygonLink);
  res = await res.json();

  let MaticBalance = res.result * 0.000000000000000001;

  //console.log(MaticBalance);

  if (MaticBalance < 1.082369393191247) {
    console.log("Balance en Polygon < 1$  Balance: " + MaticBalance);
    return [["Balance en Polygon < 1$  Balance: " + MaticBalance]];
  }
};

if (process.argv[2] === "start") {
  start();
}

if (process.argv[2] === "fuse") {
  fuse();
} else if (process.argv[2] === "harmony") {
  harmony();
} else if (process.argv[2] === "xdai") {
  xdai();
} else if (process.argv[2] === "solana") {
  solana();
} else if (process.argv[2] === "telos") {
  telos();
} else if (process.argv[2] === "evmos") {
  evmos();
} else if (process.argv[2] === "aurora") {
  aurora();
} else if (process.argv[2] === "velas") {
  velas();
} else if (process.argv[2] === "bsc") {
  bsc();
} else if (process.argv[2] === "movr") {
  movr();
} else if (process.argv[2] === "avax") {
  avax();
} else if (process.argv[2] === "kukoin") {
  kukoin();
} else if (process.argv[2] === "lum") {
  lum();
} else if (process.argv[2] === "regen") {
  regen();
} else if (process.argv[2] === "iris") {
  iris();
} else if (process.argv[2] === "desmos") {
  desmos();
} else if (process.argv[2] === "secret") {
  secret();
} else if (process.argv[2] === "sifchain") {
  sifchain();
} else if (process.argv[2] === "crescent") {
  crescent();
} else if (process.argv[2] === "bitcanna") {
  bitcanna();
} else if (process.argv[2] === "cosmos") {
  cosmos();
} else if (process.argv[2] === "FUSE") {
  FUSE();
} else if (process.argv[2] === "juno") {
  juno();
} else if (process.argv[2] === "fantom") {
  fantom();
} else if (process.argv[2] === "polygon") {
  polygon();
} else if (process.argv[2] === "celo") {
  celo();
}
