import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native'
import Row from './Row'

const styles = StyleSheet.create({
  sectionText: {
    marginLeft: 10,
    fontSize: 25,
  },
})

// export default class SectionListContacts extends React.Component
const renderItem = ({ item }) => <Row {...item} />
const renderSectionHeader = ({ section }) => (
  <Text style={styles.sectionText}>{section.title}</Text>
)

const SectionListContacts = props => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})
  // sections => [{data: [...], title: "A"},{data: [...], title: "B"}, ...]
  const sections = Object.keys(contactsByLetter)
    .sort()
    .map(letter => ({
      data: contactsByLetter[letter],
      title: letter,
    }))

  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

export default SectionListContacts
