angular.module('myApp')
.component('partyShow', {
  template: `
    <div id="party-show">
      <div class="party-header">
        <i class="fa fa-birthday-cake" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
        <i class="fa fa-hand-o-right" aria-hidden="true"></i>
        <h3>Party Name: {{ $ctrl.party.name }}</h3>
        <p><b>Date: </b>{{ $ctrl.party.date }}</p>
        <p><b>Description: </b>{{ $ctrl.party.description }}</p>
      </div>
      <div class="party-body">

        <div class="party-info">
          <i class="fa fa-clock-o" aria-hidden="true"></i><p><b>Time: </b>{{ $ctrl.party.time.start }} to {{ $ctrl.party.time.end }}</p>
            <div class="party-location">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <p><b>Location: </b>{{ $ctrl.party.address }}</p>
              <p>Google Map snapshot will go here</p>
            </div>
        </div>

        <div class="party-people">
          <i class="fa fa-user" aria-hidden="true"></i>
          <p><b>Organizer: </b>{{ $ctrl.party.organizer.username }}</p>
          <p><b>Created: </b>{{ $ctrl.party.updatedAt | date : "medium" }}</p>
          <p><b>Guest Attending: </b> {{ $ctrl.party.usersAttending }}</p>
          <p><b>Last Updated: </b>{{ $ctrl.party.createdAt | date : "medium" }}</p>
        </div>
      </div>

          <div class="food-list">
            <i class="fa fa-cutlery" aria-hidden="true"></i>
            <p> food list will be displayed here</p>
              <table>
                <thead>
                  <tr>
                      <th data-field="id">Name</th>
                      <th data-field="name">Item Name</th>
                      <th data-field="have">Accounted For</th>
                      <th data-field="need">Still Need</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ali</td>
                    <td>Chips</td>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Brad</td>
                    <td>Beer (12 pack)</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Chris</td>
                    <td>Ice Cream</td>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
          </div>

          <div class="party-music">
          <i class="fa fa-music" aria-hidden="true"></i>
          <p>Spotify Playlist here?</p>
          </div>
      </div>


    <a ui-sref="parties" class="btn btn-primary">Back</a>
    <a ng-click="$ctrl.edit(party)" class="btn btn-warning">Edit</a>
    </div>
  `,
  controller: function(partyService, $state, $stateParams) {
    this.party = null;

    this.edit = function() {
      $state.go('party-edit', { id: this.party._id });
    };

    partyService.getParty($stateParams.id)
    .then( res => {
      this.party = res.data;
      this.party.date = moment(this.party.date).format('MM-DD-YYYY')
    });


  }
});
