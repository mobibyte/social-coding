fetch("https://mavorgs.campuslabs.com/engage/events.rss")
   .then((response) => response.text())
   .then((xml) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "text/xml");
      const items = xmlDoc.querySelectorAll("item");
      const eventList = document.getElementById("event-list");

      items.forEach((item) => {
         const host = item.querySelector("host");
         if (host && host.textContent.trim() === "Mobi") {
            const title = item.querySelector("title").textContent;
            let description = item.querySelector("description").textContent;

            const tempElement = document.createElement("div");
            tempElement.innerHTML = description;
            const excludedElements =
               tempElement.querySelectorAll(".p-name.summary");
            excludedElements.forEach((el) => el.remove());
            description = tempElement.innerHTML;

            const eventItem = document.createElement("div");
            eventItem.classList.add("event");
            eventItem.innerHTML = `
            <h2>${title}</h2>
            <hr/>
            <p>${description}</p>
            `;
            eventList.appendChild(eventItem);
         }
      });
   })
   .catch((error) => console.error("Error fetching RSS feed:", error));
