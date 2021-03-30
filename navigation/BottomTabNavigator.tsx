import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";

import {
  BottomTabParamList,
  AccueilParamList,
  ToDoParamList,
  RechercheParamList,
  LaverieParamList,
  CompteParamList,
} from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import PageAccueil from "../screens/PageAccueil";
import PageToDo from "../screens/PageToDo";
import PageRecherche from "../screens/PageRecherche";
import PageLaverie from "../screens/PageLaverie";
import PageCompte from "../screens/PageCompte";
import PageConnexion from "../screens/PageConnexion";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Accueil"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Accueil"
        component={AccueilNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ToDo"
        component={ToDoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Recherche"
        component={RechercheNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Laverie"
        component={LaverieNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarMaterialCommunityIcon name="washing-machine" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Compte"
        component={CompteNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarMaterialIcon name="account-circle" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarMaterialIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarMaterialCommunityIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const AccueilStack = createStackNavigator<AccueilParamList>();

function AccueilNavigator() {
  return (
    <AccueilStack.Navigator>
      <AccueilStack.Screen
        name="AccueilScreen"
        component={PageAccueil}
        options={{ headerTitle: "Accueil" }}
      />
    </AccueilStack.Navigator>
  );
}

const ToDoStack = createStackNavigator<ToDoParamList>();

function ToDoNavigator() {
  return (
    <ToDoStack.Navigator>
      <ToDoStack.Screen
        name="ToDoScreen"
        component={PageToDo}
        options={{ headerTitle: "Liste ToDo" }}
      />
    </ToDoStack.Navigator>
  );
}

const RechercheStack = createStackNavigator<RechercheParamList>();

function RechercheNavigator() {
  return (
    <RechercheStack.Navigator>
      <RechercheStack.Screen
        name="RechercheScreen"
        component={PageRecherche}
        options={{ headerTitle: "Recherche" }}
      />
    </RechercheStack.Navigator>
  );
}

const LaverieStack = createStackNavigator<LaverieParamList>();

function LaverieNavigator() {
  return (
    <LaverieStack.Navigator>
      <LaverieStack.Screen
        name="LaverieScreen"
        component={PageLaverie}
        options={{ headerTitle: "Laverie" }}
      />
    </LaverieStack.Navigator>
  );
}

const CompteStack = createStackNavigator<CompteParamList>();

function CompteNavigator() {
  return (
    <CompteStack.Navigator>
      <CompteStack.Screen
        name="CompteScreen"
        component={PageCompte}
        options={{ headerTitle: "Mon Compte" }}
      />
    </CompteStack.Navigator>
  );
}
