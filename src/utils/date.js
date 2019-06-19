import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

export const relativeDate = timestamp => distanceInWordsToNow(new Date(timestamp))
