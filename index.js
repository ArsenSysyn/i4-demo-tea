const { onboardDeveloper, registerProject, receiveTokens } = require('tea-demo-arsen');

console.log("Starting i4-demo-tea project...");

// Simulating the onboarding of a developer who is focusing on integrating blockchain with tea ceremonies
const developerInfo = {
    name: "Ian",
    email: "ian@innovative4tea.com"
};
 
// Simulating the registration of a project that aims to digitize traditional tea ceremonies
const projectInfo = {
    name: "Innovative Tea Ceremony Blockchain Integration",
    repositoryUrl: "https://github.com/ian/i4-demo-tea"
};

const walletAddress = onboardDeveloper(developerInfo);
const projectId = registerProject(projectInfo);
receiveTokens(projectId);

console.log("i4-demo-tea project demo completed. Exploring new horizons for tea and technology!!!");