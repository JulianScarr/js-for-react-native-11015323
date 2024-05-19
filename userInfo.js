unction createUserProfiles(names, modifiedNames) {
    const userProfiles = [];
    let id = 1;
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = modifiedNames[i];
      userProfiles.push({
        originalName,
        modifiedName,
        id,
      });
      id++;
    }
    return userProfiles;
  }

const names = ["Gabriel", "Clinton ", "James", "Sussana"];
const modifiedNames = ["gabriel", "Clinton", "James", "sussana”]
const profiles = createUserProfiles(names, modifiedNames);

console.log(profiles);