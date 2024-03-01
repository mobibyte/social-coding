fetch("https://mavorgs.campuslabs.com/engage/events.rss")
   .then((response) => response.text())
   .then((xml) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "text/xml");
      const items = xmlDoc.querySelectorAll("item");
      const eventList = document.getElementById("event-list");

      items.forEach((item) => {
         const title = item.querySelector("title").textContent;
         if (title.includes("Social Coding")) {
            const date = item.querySelector("pubDate").textContent;
            let description = item.querySelector("description").textContent;

            // Exclude div with class name "p-name summary"
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
                    <p>Date: ${date}</p>
                    <p>Description:</p>
                    <p> 
                    ${description}
                    </p>
                `;
            eventList.appendChild(eventItem);
         }
      });
   })
   .catch((error) => console.error("Error fetching RSS feed:", error));
