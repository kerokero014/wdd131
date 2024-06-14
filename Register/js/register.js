document.addEventListener('DOMContentLoaded', function () {
    let participantCount = 1;

    const addButton = document.getElementById('add');
    addButton.addEventListener('click', function () {
        participantCount++;
        const template = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', template);
    });

    function participantTemplate(count) {
        return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select id="grade${count}" name="grade${count}">
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
        `;
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault(); // Prevent default form submission

        const total = totalFees(); // Calculate total fees
        const adultName = document.getElementById('adult_name').value; // Get adult name

        hideElement(form); // Hide form
        displaySummary(successTemplate({ adultName, participantCount, total })); // Display summary
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        const total = feeElements.reduce((acc, feeElement) => acc + parseFloat(feeElement.value || 0), 0);
        return total.toFixed(2); // Return total as a formatted string
    }

    function successTemplate(info) {
        return `
        <p>Thank you ${info.adultName} for registering.</p>
        <p>You have registered ${info.participantCount} participant(s) and owe $${info.total} in fees.</p>
        `;
    }

    function hideElement(element) {
        element.style.display = "none";
    }

    function displaySummary(message) {
        const summaryElement = document.getElementById('summary');
        summaryElement.innerHTML = message;
        summaryElement.style.display = 'block';
    }
});
