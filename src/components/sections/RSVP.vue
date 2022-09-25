<template>
    <section id="invitation" class="section invitation section-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center heading">
                    <h2>Réservation</h2>
                    <p>
                        C'est ici que vous pourrez éventuellement confirmer votre présence et celle de vos enfants. Vous pourrez en même temps choisir votre menu et nous indiquer si vous serez présent
                        au brunch. Nous vous tiendrons au courant du moment où il sera possible de confirmer le tout. Pour ce faire, pouvez-vous nous laisser votre nom et votre email ?
                    </p>
                </div>
            </div>
            <div class="row h-flex-md">
                <div class="form-wrapper col-md-12">
                    <form action="form.php" id="contact-form" class="form-horizontal" method="post">
                        <h3 class="invitation_heading">Will you be attending the wedding?</h3>
                        <div class="row">
                            <div class="form-field switch-field col-sm-12">
                                <input type="radio" name="rdo" id="yes" value="Yes" />
                                <input type="radio" name="rdo" id="no" value="No" />
                                <div class="switch">
                                    <label for="yes">Yes</label>
                                    <label for="no">No</label>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div id="name-field" class="form-field col-sm-6">
                                <label for="form-name" class="control-label">Your name*</label>
                                <input type="text" class="form-control" id="form-name" name="form-name" required />
                            </div>
                            <div id="email-field" class="form-field col-sm-6">
                                <label for="form-email" class="control-label">Email*</label>
                                <input type="email" class="form-control" id="form-email" name="form-email" required />
                            </div>
                        </div>
                        <h3 class="invitation_heading">Who else is comming with you?</h3>
                        <div class="row">
                            <div id="guest-name-field" class="form-field col-sm-8">
                                <label for="form-guest-name" class="control-label">Guest name</label>
                                <input type="text" class="form-control" id="form-guest-name" name="form-name" />
                            </div>
                            <div class="form-field col-sm-4 text-center">
                                <button type="button" class="add-button">Add guest</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="guest-list form-field col-sm-12"></div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <button type="submit" class="btn btn-outline-black btn-lg send-button">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
