
#include <stdbool.h>
#include <stdio.h>
bool linearSearch(int[], int, int);
bool binarySearch(int[], int, int);
bool binarySearch2(int[], int, int);

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
  int high = size;
  int low = 0;
  for (int i = 1; i <= size; i *= 2) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == value) {
      return true;
    } else if (arr[mid] > value) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return false;
}
int halfNumber(int high, int low) {
  int half = (high - low) / 2;
  return half == 0 ? 1 : half;
}
// do this using while loop
bool binarySearch2(int arr[], int size, int value) {
  int low = 0;
  int high = size;
  int mid;
  do {
    mid = low + (high - low) / 2;
    if (arr[mid] == value) {
      return true;
    } else if (arr[mid] < value) {
      // if not adding 1 , cannot archive index == last_length - 1
      low = mid + 1;
    } else {
      // if I add mid +1 , Its cannot archive index == 0
      high = mid;
    }
  } while (low < high);
  return false;
}
