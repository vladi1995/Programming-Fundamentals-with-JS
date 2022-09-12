function extractEmails(stringToExtract) {
    let pattern = /(?<!\S)[A-Za-z\d]+[.\-\_]?[A-Za-z\d]+@([A-Za-z\-]+[.]+)+[A-Za-z]+/g;
    let match = pattern.exec(stringToExtract);
    while (match != null) {
        console.log(match[0]);
        match = pattern.exec(stringToExtract);
    }
}

extractEmails("Please contact us at: support@github.com.");
extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");