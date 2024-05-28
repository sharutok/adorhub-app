import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { api } from '@/helper/Api'

const Visitorlist = () => {
  const response = useQuery({
    queryKey: ['conference-listing'],
    queryFn: async () => {
      const data = axios.get(`${api.conference_booking.get_data}/?page=${1}&search=${""}&date=${false}&woosee=${15681}`)
      return data
    }
  })

  return (
    <View>
      <Text>Visitorlist</Text>
    </View>
  )
}

export default Visitorlist