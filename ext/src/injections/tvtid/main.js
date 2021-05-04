import '../../includes/CrMSLogHeader'
import XRegExp from "xregexp";

const r = () => {
    let programmeLinkNodes = document.querySelectorAll(".tv2epg-program-details-link:not(.crms)");

    programmeLinkNodes.forEach(p => {
        let parentNode = p.parentNode;
        let defaultLink = p.getAttribute("href");
        let {channelId, programmeId} = XRegExp.exec(defaultLink, XRegExp(`https:\\/\\/tvtid\\.tv2\\.dk\\/program\\/(?<channelId>.*)\\/(?<programmeId>.*)`)).groups;

        if(parentNode.querySelectorAll(".crms").length > 0) {
            return;
        }

        const creditLink = document.createElement("a");
        creditLink.href = `https://crms.mgx.dk/test/${programmeId}`;
        creditLink.innerText = "Vis kreditteringer";
        creditLink.classList.add("tv2epg-program-details-link");
        creditLink.classList.add("crms");
        creditLink.style.marginLeft = "1rem";

        parentNode.appendChild(creditLink);
    })

}

window.addEventListener("click", _ => {
    setTimeout(r, 10);
    setTimeout(r, 120);
});
