class ContentItem {
    constructor(id, name, description, category) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.category = category;
    }
  
    updateContentItem(id, name, description, category) {
      if (id === this.id) {
        if (name !== null) {
          this.name = name;
        }
        if (description !== null) {
          this.description = description;
        }
        if (category !== null) {
          this.category = category;
        }
      }
    }
    toString() {
      return `
        <div class="content-item-wrapper" id="content-item-${this.id}">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
          <div>${this.category}</div>
        </div>
      `;
    }
  }


 
  $(document).ready(function () {
    const contentItems = [
        new ContentItem(0, "Cristiano Ronaldo", "Al Nassr", "Soccer"),
        new ContentItem(1, "Olexandr Usyk", "WBO", "Boxing"),
        new ContentItem(2, "Lionel Messi", "PSG", "Soccer"),
        new ContentItem(3, "Lebron James", "Lakers", "Basketball"),
        new ContentItem(4, "Mudryk", "Chelsea", "Soccer"),
    ];
  
    const contentItemList = $("#content-item-list");
  
    contentItems.forEach((item) => {
      const itemHtml = item.toString();
      const $itemElement = $(itemHtml);
      
  
      $itemElement.find('.content-item-wrapper').css({
        border: "2px solid #333",
        width: "300px",
        padding: "10px",
        margin: "20px auto", 
      });
  
      contentItemList.append($itemElement);
    });
  
    $("#updateSuccessful").on("click", function () {
      contentItems[0].updateContentItem(0, "Updated Item 1", null, null);
      refreshContentItems();
    });
  
    $("#updateUnsuccessful").on("click", function () {
      contentItems[1].updateContentItem(0, "Attempted Update", null, null);
      refreshContentItems();
    });
  
    function refreshContentItems() {
      contentItemList.empty();
      contentItems.forEach((item) => {
        const itemHtml = item.toString();
        const $itemElement = $(itemHtml);
        
        $itemElement.find('.content-item-wrapper').css({
          border: "2px solid #333",
          width: "300px",
          padding: "10px",
          margin: "20px auto",
        });
  
        contentItemList.append($itemElement);
      });
    }
  });
  