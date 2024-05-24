import { View, Text, ScrollView, Pressable,  } from 'react-native'
import { router } from 'expo-router';
import {useMemo} from 'react'
import React from 'react'
import moment from 'moment'

export default function CreateConference() {
    const value = useMemo(() => {
        return (Array.from(Array(41).keys()).map(x => {
            return moment("06/23/2023 08:00","MM/DD/YYYY hh:mm").add(15 * (x), 'minute').format("hh:mm A");
        }))
    }, [])
  return (
      <View style={{ backgroundColor: 'white' }}>
          <ScrollView>
          {value.map((x,i) => {
              return (
                  <Pressable onPress={() => router.push("/conference-booking/conference-form")}
                      style={{ borderTopWidth: i !== 0 ? 1 : 0, width: '100%', padding: 20, borderColor: '#808285' }}
                      key={i}>
                    <Text style={{fontSize:15}}>{x}</Text>
                    </Pressable>)
            })}
            </ScrollView>
    </View>
  )
}