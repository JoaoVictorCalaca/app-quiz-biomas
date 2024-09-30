import { View, Text, StyleSheet, TouchableOpacity, Vibration, Modal } from 'react-native'
import React, { useState } from 'react'
import { appColors } from '@/src/util/colors'
import { quizData } from '@/src/util/quizData'

const index = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [score, setScore] = useState(0)

  const currentQuestion = quizData[questionIndex]

  const handleAnswer = (option) => {
    setSelectedAnswer(option)
    setHasAnswered(true)
    Vibration.vibrate(100)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1)
      Vibration.vibrate(100)
    }

    if (questionIndex < quizData.length - 1) {
      setQuestionIndex(questionIndex + 1)
      setHasAnswered(false)
      setSelectedAnswer(null)
    }
  }

  const handleBntColor = (option) => {
    if (!hasAnswered) {
      return styles.bntAnswer
    }

    if (option === currentQuestion.correctAnswer) {
      return [styles.bntAnswer, styles.correctAnswer]
    } else if (option === selectedAnswer) {
      return [styles.bntAnswer, styles.wrongAnswer]
    }

    return styles.bntAnswer
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>🎯 Pergunta {questionIndex + 1} / {quizData.length}</Text>

      <View style={styles.questionContainer}>
        <Text style={styles.h1}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.answers}>
        {currentQuestion.options.map((option, i) => {
          return (
            <TouchableOpacity
              key={i.toString()}
              style={handleBntColor(option)}
              onPress={() => !hasAnswered && handleAnswer(option)}
              disabled={hasAnswered}
            >
              <Text style={styles.h1}>{option}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

      {hasAnswered && (
        <Modal transparent animationType='slide'>
          <View style={styles.result}>
            <Text style={styles.h1}>Resposta certa: <Text style={styles.answerMarkedText}>{currentQuestion.correctAnswer}</Text></Text>
            <TouchableOpacity style={styles.nextQuestionBtn} onPress={() => handleNextQuestion()}>
              <Text style={styles.h1}>Próxima pergunta ▶</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.defaultBlue,
    justifyContent: 'space-around',
    padding: 25,
  },

  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: appColors.defaultWhite,
    width: '90%'
  },

  h2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: appColors.defaultWhite,
    width: '90%'
  },

  answerMarkedText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: appColors.defaultGreen,
    width: '90%'
  },

  questionContainer: {
    backgroundColor: appColors.tertiaryBlue,
    borderRadius: 12,
    padding: 15
  },

  answers: {
    gap: 20
  },

  bntAnswer: {
    backgroundColor: appColors.secondaryBlue,
    padding: 18,
    borderRadius: 12
  },

  nextQuestionBtn: {
    backgroundColor: appColors.defaultGreen,
    padding: 8,
    borderRadius: 12,
  },

  correctAnswer: {
    backgroundColor: appColors.defaultGreen
  },

  wrongAnswer: {
    backgroundColor: appColors.defaultRed
  },

  result: {
    width: '100%',
    height: '30%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: appColors.tertiaryBlue,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    gap: 15,
    position: 'absolute',
    bottom: 0
  }
})

export default index