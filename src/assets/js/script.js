document.addEventListener("DOMContentLoaded", () => {

  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })


    document.addEventListener("click", (event) => {
      if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add("hidden")
      }
    })
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })


  const contactForm = document.querySelector('form[method="POST"]')
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const requiredFields = this.querySelectorAll("[required]")
      let isValid = true

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.classList.add("border-red-500")
        } else {
          field.classList.remove("border-red-500")
        }
      })

      if (!isValid) {
        e.preventDefault()
        alert("Por favor, preencha todos os campos obrigatórios.")
      }
    })
  }


  const budgetSlider = document.querySelector('input[name="budget"]')
  if (budgetSlider) {
    budgetSlider.addEventListener("input", function () {
      updateBudgetValue(this.value)
    })
  }

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })
  }
})

function updateBudgetValue(value) {
  const budgetValueElement = document.getElementById("budgetValue")
  if (budgetValueElement) {
    budgetValueElement.textContent = Number.parseInt(value).toLocaleString("pt-BR")
  }
}

setTimeout(() => {
  const successMessage = document.querySelector(".bg-green-500")
  const errorMessage = document.querySelector(".bg-red-500")

  if (successMessage) {
    successMessage.style.transition = "opacity 0.5s"
    successMessage.style.opacity = "0"
    setTimeout(() => successMessage.remove(), 500)
  }

  if (errorMessage) {
    errorMessage.style.transition = "opacity 0.5s"
    errorMessage.style.opacity = "0"
    setTimeout(() => errorMessage.remove(), 500)
  }
}, 5000)
