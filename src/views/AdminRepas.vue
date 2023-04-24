<template>
  <v-app>
    <Nav :enable-login="true" />
    <v-divider class="pb-8" />
    <v-main>
      <v-container>
        <h1>Repas</h1>

        <h3>Gravlax: {{ stats.gravlax + stats.inviteGravlax }}</h3>
        <h3>Entree végé: {{ stats.entreeVege + stats.inviteEntreeVege }}</h3>
        <h3>Canard: {{ stats.canard + stats.inviteCanard }}</h3>
        <h3>Macreuse: {{ stats.macreuse + stats.inviteMacreuse }}</h3>
        <h3>Repas végé: {{ stats.repasVege + stats.inviteRepasVege }}</h3>
        <h3>Enfants 0-5: {{ stats.enfant05 }}</h3>
        <h3>Enfants 6-12: {{ stats.enfant612 }}</h3>

        <h3>Brunch adultes: {{ stats.brunchAdultes }}</h3>
        <h3>Brunch enfants: {{ stats.brunchEnfants }}</h3>

        <v-divider />
        <h2>Réponses</h2>
        <v-table density="compact" class="cContainer">
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Nom</th>
              <th class="text-left">Courriel</th>
              <th class="text-left">Entree</th>
              <th class="text-left">Repas</th>
              <th class="text-left">Restrictions</th>
              <th class="text-left">Invité</th>
              <th class="text-left">Entree Invité</th>
              <th class="text-left">Repas Invité</th>
              <th class="text-left">Restrictions Invité</th>
              <th class="text-left">Enfants 0-5</th>
              <th class="text-left">Enfants 6-12</th>
              <th class="text-left">Restrictions Enfants</th>
              <th class="text-left">Brunch adultes</th>
              <th class="text-left">Brunch enfants</th>
              <th class="text-left">Chansons</th>
              <!-- <th class="text-left">Date</th> -->
              <th class="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in repas" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.entree }}</td>
              <td>{{ item.repas }}</td>
              <td>{{ item.restriction }}</td>
              <td>{{ item.nameGuest }}</td>
              <td>{{ item.entreeGuest }}</td>
              <td>{{ item.repasGuest }}</td>
              <td>{{ item.restrictionGuest }}</td>
              <td>{{ item.kids05 }}</td>
              <td>{{ item.kids612 }}</td>
              <td>{{ item.restrictionKids }}</td>
              <td>{{ item.bruncAdults }}</td>
              <td>{{ item.bruncKids }}</td>
              <td>{{ item.chanson }}</td>

              <!-- <td>{{ item.createdAt }}</td> -->
              <td>
                <v-btn
                  variant="text"
                  icon="mdi-delete"
                  size="small"
                  @click="openDialog(item)"
                />
              </td>
            </tr>
          </tbody>
        </v-table>

        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title> Delete </v-card-title>
            <v-card-text v-if="dialogContext">
              <h2>choix:</h2>
              <div>Nom: {{ dialogContext.name }}</div>
              <div>Courriel: {{ dialogContext.email }}</div>
              <div>Entrée: {{ dialogContext.entree }}</div>
              <div>Repas: {{ dialogContext.repas }}</div>
              <div>
                Restriction alimentaires:
                {{ dialogContext.restriction }}
              </div>

              <h3 v-if="dialogContext.nameGuest">Invité:</h3>
              <div v-if="dialogContext.nameGuest">
                Invité: {{ dialogContext.nameGuest }}
              </div>
              <div v-if="dialogContext.nameGuest">
                Entrée invité: {{ dialogContext.entreeGuest }}
              </div>
              <div v-if="dialogContext.nameGuest">
                Repas invité: {{ dialogContext.repasGuest }}
              </div>
              <div v-if="dialogContext.nameGuest">
                Restriction alimentaires invité:
                {{ dialogContext.restrictionGuest }}
              </div>

              <h3>Enfants:</h3>
              <div v-if="dialogContext.kids05">
                Enfants 0-5 ans: {{ dialogContext.kids05 }}
              </div>
              <div v-if="dialogContext.kids612">
                Enfants 6-12 ans: {{ dialogContext.kids612 }}
              </div>
              <div v-if="dialogContext.kids05 || dialogContext.kids612">
                Restriction alimentaires enfants:
                {{ dialogContext.restrictionKids }}
              </div>

              <div v-if="dialogContext.bruncAdults">
                Nombre d'adultes brunch:
                {{ dialogContext.bruncAdults }}
              </div>
              <div v-if="dialogContext.bruncKids">
                Nombre d'enfants brunch:
                {{ dialogContext.bruncKids }}
              </div>
              <div v-if="dialogContext.chanson">
                Chanson: {{ dialogContext.chanson }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn @click="dialog = false">Cancel</v-btn>
              <v-btn @click="deleteEntry()" :loading="dialogLoading"
                >Delete</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Nav from "@/components/sections/Nav.vue";
import { ref, onMounted, computed } from "vue";
import { collection, onSnapshot, query } from "firebase/firestore";
import { storeToRefs } from "pinia";
import firebaseStore from "@/stores/firebaseStore";

import { useRepo } from "pinia-orm";
import Repas from "@/models/repasModel";

const store = firebaseStore();
const { db } = storeToRefs(store);
const { removeRepas } = store;

const repasRepo = useRepo(Repas);

const dialog = ref(false);
const dialogLoading = ref(false);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dialogContext: any = ref(undefined);

const repas = computed(() => {
  return repasRepo.all().filter((r) => !r.archive);
});

const stats = computed(() => {
  if (!repas.value || repas.value.length === 0)
    return {
      gravlax: 0,
      entreeVege: 0,
      canard: 0,
      macreuse: 0,
      repasVege: 0,

      inviteGravlax: 0,
      inviteEntreeVege: 0,
      inviteCanard: 0,
      inviteMacreuse: 0,
      inviteRepasVege: 0,

      enfant05: 0,
      enfant612: 0,

      brunchAdultes: 0,
      brunchEnfants: 0,
    };
  return {
    gravlax: repas.value.filter(
      (r) => r?.entree && r.entree.toLowerCase() === "gravlax"
    ).length,
    entreeVege: repas.value.filter(
      (r) => r?.entree && r?.entree.toLowerCase() === "vege"
    ).length,
    canard: repas.value.filter(
      (r) => r?.repas && r?.repas.toLowerCase() === "canard"
    ).length,
    macreuse: repas.value.filter(
      (r) => r?.repas && r?.repas.toLowerCase() === "macreuse"
    ).length,
    repasVege: repas.value.filter(
      (r) => r?.repas && r?.repas.toLowerCase() === "vege"
    ).length,

    inviteGravlax: repas.value.filter(
      (r) => r?.entree && r.entreeGuest.toLowerCase() === "gravlax"
    ).length,
    inviteEntreeVege: repas.value.filter(
      (r) => r?.entree && r?.entreeGuest.toLowerCase() === "vege"
    ).length,
    inviteCanard: repas.value.filter(
      (r) => r?.repasGuest && r?.repasGuest.toLowerCase() === "canard"
    ).length,
    inviteMacreuse: repas.value.filter(
      (r) => r?.repasGuest && r?.repasGuest.toLowerCase() === "macreuse"
    ).length,
    inviteRepasVege: repas.value.filter(
      (r) => r?.repasGuest && r?.repasGuest.toLowerCase() === "vege"
    ).length,

    enfant05: repas.value
      .filter((r) => r?.kids05 && r?.kids05)
      .reduce((partialSum, r) => partialSum + r.kids05, 0),
    enfant612: repas.value
      .filter((r) => r?.kids612 && r?.kids612)
      .reduce((partialSum, r) => partialSum + r.kids612, 0),

    brunchAdultes: repas.value
      .filter((r) => r?.bruncAdults && r?.bruncAdults)
      .reduce((partialSum, r) => partialSum + r.bruncAdults, 0),
    brunchEnfants: repas.value
      .filter((r) => r?.bruncKids && r?.bruncKids)
      .reduce((partialSum, r) => partialSum + r.bruncKids, 0),
  };
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const openDialog = (item: any) => {
  dialogContext.value = item;
  dialog.value = true;
};

const closeDialog = () => {
  dialogLoading.value = false;
  dialogContext.value = undefined;
  dialog.value = false;
};

const deleteEntry = () => {
  dialogLoading.value = true;

  removeRepas({ id: dialogContext.value.id }).finally(() => {
    closeDialog();
  });
};

onMounted(() => {
  onSnapshot(query(collection(db.value, "repas")), (docs) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = [];

    docs.forEach((doc) => {
      // Set firebase id as orm id
      // if ("createdAt" in doc.data()) doc.data().createdAt = doc.data().createdAt.seconds * 1000
      const r = { id: doc.id, ...doc.data() };

      response.push(r);
    });
    console.log(response);
    repasRepo.save(response);
  });
});
</script>

<style scoped>
.cContainer {
    padding: 0;
    border: 1px solid #ccc;
}
</style>
