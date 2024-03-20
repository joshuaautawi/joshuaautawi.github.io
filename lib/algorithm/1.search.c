
#include <stdbool.h>
#include <stdio.h>
bool linearSearch(int[], int, int);
bool binarySearch(int[], int, int);

double ceil(double x) {
  int intPart = (int)x;
  double fracPart = x - intPart;

  if (fracPart > 0) {
    return intPart + 1;
  } else {
    return intPart;
  }
}
int main(int argc, char *argv[]) {
  int arr[7] = {1, 2, 3, 4, 5, 6, 7};
  int size = sizeof(arr) / sizeof(int);
  int value = 7;
  bool result = binarySearch(arr, size, value);
  printf("Result : %d", result);
  return 0;
}

bool linearSearch(int arr[], int size, int value) {
  for (int index = 0; index < size; index++) {
    if (arr[index] == value) {
      return true;
    }
  };
  return false;
};

bool binarySearch(int arr[], int size, int value) {
  int firstIndex = 0;
  int lastIndex = size - 1;
  double midleValue = (double)(lastIndex - firstIndex) / 2;
  int midIndex = ceil(midleValue);
  for (int i = 1; i <= size; i *= 2) {
    if (arr[midIndex] == value) {
      return true;
    } else if (arr[midIndex] > value) {
      lastIndex = midIndex;
      midleValue = (double)(lastIndex - firstIndex) / 2;
      midIndex -= ceil(midleValue);
    } else {
      firstIndex = midIndex;
      midleValue = (double)(lastIndex - firstIndex) / 2;
      midIndex += ceil(midleValue);
    }
  }
  return false;
}
