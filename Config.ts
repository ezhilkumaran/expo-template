import * as Updates from 'expo-updates';

let Config = {
    apiUrl: 'https://localhost:3000',
    enableHiddenFeatures: true,
};

if (Updates.channel === 'production') {
    Config.apiUrl = 'https://api.production.com';
    Config.enableHiddenFeatures = false;
} else if (Updates.channel === 'staging') {
    Config.apiUrl = 'https://api.staging.com';
    Config.enableHiddenFeatures = true;
}

export default Config;
